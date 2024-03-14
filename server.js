// import express from "express";
const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("I'm listening from port 3000 requests");
});
