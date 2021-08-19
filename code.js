let encode="I love cryptography!"

function codes(str){
  let safe =""
  for (let i =0; i<str.length; i++){
  switch (str[i]) {
    case "A":
       safe+="100"
      break
    case "B":
       safe+="200"
      break
    case "C":
       safe+="300"
      break
    case "D":
       safe+="800"
      break
    case "E":
       safe+="150"
      break
    case "F":
       safe+="030"
      break
    case "G":
       safe+="560"
      break
    case "H":
       safe+="104"
      break
    case "I":
       safe+="189"
      break
    case "J":
       safe+="340"
      break
    case "K":
       safe+="605"
      break
    case "L":
       safe+="660"
      break
    case "M":
       safe+="442"
      break
    case "N":
       safe+="294"
      break
    case "O":
       safe+="195"
      break
    case "P":
       safe+="128"
      break
    case "Q": 
       safe+="850"
      break
    case "R":
       safe+="540"
      break
    case "S":
       safe+="380"
      break
    case "T":
       safe+="020"
      break
    case "U":
       safe+="210"
      break
    case "V":
       safe+="220"
      break
    case "W":
       safe+="460"
      break
    case "X":
       safe+="720"
      break
    case "Y":
       safe+="125"
      break
    case "Z":
       safe+="208"
      break
    case " ":
       safe+="377"
      break
    case "!":
       safe+="420"
       break
    }
  }
  return(safe)
  }

function unCodes(str){
  let open =""
  for (let i =0; i<str.length; i+=3){
  switch (str[i]+str[i+1]+str[i+2]) {
    case "100":
       open+="A"
      break
    case "200":
       open+="B"
      break
    case "300":
       open+="C"
      break
    case "800":
       open+="D"
      break
    case "150":
       open+="E"
      break
    case "030":
       open+="F"
      break
    case "560":
       open+="G"
      break
    case "104":
       open+="H"
      break
    case "189":
       open+="I"
      break
    case "340":
       open+="J"
      break
    case "605":
       open+="K"
      break
    case "660":
       open+="L"
      break
    case "442":
       open+="M"
      break
    case "294":
      open+="N"
      break
    case "195":
       open+="O"
      break
    case "128":
       open+="P"
      break
    case "850": 
       open+="Q"
      break
    case "540":
       open+="R"
      break
    case "380":
       open+="S"
      break
    case "020":
       open+="T"
      break
    case "210":
       open+="U"
      break
    case "220":
       open+="V"
      break
    case "460":
       open+="W"
      break
    case "720":
       open+="X"
      break
    case "125":
       open+="Y"
      break
    case "208":
       open+="Z"
      break
    case "377":
       open+=" "
      break
    case "420":
       open+="!"
       break
    }
  }
  return(open)
  }
unCodes("189377660195220150377300540125128020195560540100128104125420")
console.log(codes("HELLO WORLD"))
console.log(unCodes("104150660660195377460195540660800"))
