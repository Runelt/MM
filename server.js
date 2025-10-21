// 서버 시작
const express = require('express');
    //require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// html 진입
app.use(express.static('public'));

// 서버 구동
app.listen(PORT, () => {
  console.log(`✅ http://localhost:${PORT}`);
});
