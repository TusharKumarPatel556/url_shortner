const shortid = require("shortid");
const URL = require("../models/url");

async function reduceUrl(req, res) {
  const { urldata } = req.body;
  if (!urldata) {
    res.status(400).json({ error: "url is required" });
  }

  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectURL: urldata,
    visitedHistory: [],
  });

  res.json({ id: shortID });
}

async function getUrl(req, res) {
  const shortId = req.params.shortId;
  const clicked = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(clicked.redirectURL);
}

module.exports = { reduceUrl, getUrl };
