function update1(){
    var element = document.getElementById("nameInput1");
    var content = element.value;
    document.getElementById("person1").innerHTML = content;
    document.getElementById("nameInput1").value = "";
  }
  function update2(){
    var element = document.getElementById("nameInput2");
    var content = element.value;
    document.getElementById("person2").innerHTML = content;
    document.getElementById("nameInput2").value = "";
  }
  function compute(){
    var name1 = document.getElementById("person1").innerHTML;
    var name2 = document.getElementById("person2").innerHTML;
    var num1 = 0;
    var num2 = 0;
    for (var i = 0; i < name1.length; i++){
      num1 = num1 + name1.charCodeAt(i);
    }
    for (var j = 0; j < name2.length; j++){
      num2 = num2 + name2.charCodeAt(j);
    }
    var result = (num1 * num2 * 273);
    var strRes = result.toString();
    
    return strRes.substring(0, 2)+"%";
  }
  /* make visible, make animation, use the compute method, display the right result, unselect button and remove animated class*/
  function magicHappens(){
    var element = document.getElementById("resultLabel");
    element.innerHTML = "";
    element.style.display = "block";
    element.classList.toggle("animated");
    setTimeout('display()',3005);
  }
  function display(){
    var element = document.getElementById("resultLabel");
    element.innerHTML = compute();
    element.classList.toggle("animated");
    document.getElementById("compute").blur();
  }