var interpret = function (command) {
  return command.split("()").join("o").split("(al)").join("al");
};

//나는 애초에 객체를 만등어서 비교하려고했다. 하지만 풀다가 뭔가 더 좋은 방법이 있을 것같아서
//베스트 코드를 봤는데 세상에 split()과 join()으로 한줄 코딩한 사람이 있다..
//미쳤다..

// string
