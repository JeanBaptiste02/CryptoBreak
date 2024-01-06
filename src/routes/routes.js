// routes.js
const express = require("express");
const router = express.Router();

const CoinCtrl = require("../controlleur/coinController");
const CryptoCtrl = require("../controlleur/cryptosController");
const TrendCoinCtrl = require("../controlleur/trendingcoinsController");
const MessageCtrl = require("../controlleur/messageController");

router.get("/init", CryptoCtrl.inisialize);

router.get(
  "/cryptos/admin",
  authenticate,
  authorizeAdmin,
  CryptoCtrl.getCryptoInfoByName
);

router.get("/cryptos", CoinCtrl.fetchCoins);

router.get("/cryptos/id", TrendCoinCtrl.fetchCoinsTrendings);

// Dans routes.js
router.get("/messages", MessageCtrl.getAllMessages);
router.post("/messages", MessageCtrl.createMessage);

module.exports = router;
