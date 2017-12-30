var express = require('express');
var router = express.Router();

module.exports = (function() {
  return {
    getAccounts(req, res) {
      req.AccountObject.find({}, (error, doc) => {
        if (error) return res.status(500).send("Cannot get accounts!")
        res.status(200).send(doc)
      })
    },
    addAccount(req, res) {
      let account = new req.AccountObject(req.body);
      account.save((error, doc) => {
        if (error) return res.status(500).send("Cannot save your account!")
        res.status(201).send({
          id: doc._id
        })
      });
    },
    updateAccount(req, res) {
      let mongoId = req.params.id;
      let account = new req.AccountObject(req.body);
      req.AccountObject.findOne({
        _id: mongoId
      }, (error, doc) => {
        if (error) return res.status(500).send("Error finding account! Details:" + error);
        if (doc) {
          var accountToUpdate = {};
          accountToUpdate = Object.assign(accountToUpdate, account._doc);
          delete accountToUpdate._id;          
          doc.update(accountToUpdate, (error) => {
            if (error) return res.status(500).send("Cannot update account! Details:" + error);
            res.status(200).send()
          });
        } else {
          return res.status(404).send("Document cannot be found!");
        }

      })
    },
    removeAccount(req, res) {
      let mongoId = req.params.id;
      req.AccountObject.findOne({
        _id: mongoId
      }, (error, doc) => {
        if (error) return res.status(500).send("Error finding account! Details:" + error);
        if (doc) {
          doc.remove((error, doc) => {
            if (error) return res.status(500).send("Cannot remove account! Details:" + error);
            res.status(204).send()
          });
        } else {
          return res.status(404).send("Document cannot be found!");
        }

      })
    }
  }
})();
