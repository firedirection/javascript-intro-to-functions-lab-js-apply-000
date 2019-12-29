function shout(string){
  return string.toUpperCase()
}



function whisper(string){
  return string.toLowerCase()
}


function logShout(string){
  console.log(shout(string))
}


function logWhisper(string){
  console.log(whisper(string))
}

function sayHiToGrandma(string){
  if (whisper(string) === string){
<<<<<<< HEAD
    return "I can\'t hear you!"
  }else if(shout(string) === string){
    return "YES INDEED!"
  }else if(string ==="I love you, Grandma."){
    return "I love you, too."
  }  
=======
    return "I can\'t not here you!"
  }else if(shout(string) === string){
    return "YES INDEED!"
  }else if(if string =)  
>>>>>>> a1ebb3919568a93e1393406dab5245a00e43b818
}

