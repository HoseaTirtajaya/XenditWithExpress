const express = require("express");
const Router = express.Router();
const Xendit = require("xendit-node");
const va = require("xendit-node/src/va");

const fixedva = "5f59ee36f3dbf91cf0afed90";
const accoutno = "107669999439843";

const x = new Xendit({
  secretKey:
    "xnd_development_T3YzSAlX0KaWQnud9aMcXrcAkjoBx1GxOznt5Iqtr2NpgFMAcbFGcOAMVkbLCp",
});

Router.get("/channels", (req, res, next) => {
    const { Balance } = x;
    const b = new Balance({});

    b.getBalance({}).then((banks) =>{
        res.status(200).json({banks});
    }).catch((err) => {
        if(err){
            res.status(400).json({err});
        }
    });
});

Router.get("/banks", (req, res, next) => {
  const { VirtualAcc } = x;
  const va = new VirtualAcc({});

  va.getVABanks()
    .then((banks) => {
      res.status(200).json({ banks });
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ err });
      }
    });
});

Router.get("/getva", (req, res, next) => {
  const { VirtualAcc } = x;
  const va = new VirtualAcc({});

  va.getFixedVA({ id: fixedva })
    .then((vaccount) => {
      res.status(200).json({ vaccount });
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ err });
      }
    });
});

Router.post("/applyva", (req, res, next) => {
  const { VirtualAcc } = x;
  const va = new VirtualAcc({});

  va.createFixedVA({
    externalID: "nwrntest01",
    bankCode: "BCA",
    name: "Nawarin",
  })
    .then((vaccount) => {
      res.status(200).json({ vaccount });
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ err });
      }
    });
});

Router.post("/pay", (req, res, next) => {
    const { VirtualAcc } = x;
    const va = new VirtualAcc({});

    va.updateFixedVA({id: fixedva, expectedAmt: 12000}).then(() => {
        res.status(200).json({message: "Your VA has been updated"});
    }).catch((err) => {
        res.status(400).json({err});
    });
});

module.exports = Router;
