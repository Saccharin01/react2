const message: string = "안녕하세요 만나서 반가워요"

const test = (message : string) => {
  if(message.includes("안녕하세요")){
    console.log(message)
  } else {
    console.log("hello!")
  }
}

test(message)