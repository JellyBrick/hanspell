const checkSpell = require('../lib/pusan-univ-check-spell')
const sentence = 
`여름 저녁이 푸르를 때 난 가리라
보리 무성한 사이 가느다란 풀 짓밟힌 샛길 속으로.
몽상가인 난, 발에 신선함을 느끼리라.
난 내 벗은 머리를 바람이 스쳐지나가게 내버려두리라.

난 말하지 않으련다, 아무것도 생각지 않으련다.
그러나 한없는 사랑이 내 혼속에 살아오리니
그럼 유랑민처럼 멀리 아주 멀리 가리라,
여인과 같이 있는 것처럼 행복되게, 이리저리 자연을`

test('pusan univ check spell of sentence', done => {
  const timeout = 4000;
  const check = function (data) {
    console.log(data);
    expect(data.length).toBe(4);
    expect(data[0].errorInput).toEqual("스쳐지나가게");
    expect(data[0].errorOutput).toEqual("스쳐 지나가게");
    expect(data[1].errorInput).toEqual("내버려두리라");
    expect(data[1].errorOutput).toEqual("내버려 도리라");
    expect(data[2].errorInput).toEqual("혼속에");
    expect(data[2].errorOutput).toEqual("혼 속에");
    expect(data[3].errorInput).toEqual("행복되게");
    expect(data[3].errorOutput).toEqual("행복하게");
  };
  const end = function () {
      done();
  };

  checkSpell(sentence, timeout, check, end);
});
