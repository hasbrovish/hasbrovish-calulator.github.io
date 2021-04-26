var num=0;
var result=0;
var numberEventArray=[];
var flag=0;
function myButton(buttonObj){
    if(buttonObj.value=="backArrow")
     {
    num=Math.floor(num/10)
        console.log(num)
        document.getElementById('inputTxt').value=num
     }
    else{     
    var buttonVal=buttonObj.value;
    buttonVal=buttonVal-'0';
    console.log(buttonVal);
    console.log(typeof(buttonVal));
    num=num*10+buttonVal;
    console.log(num)
    document.getElementById('inputTxt').value=num
    flag=1;
    }
}

function myOperations(operationObj)
{
    if(flag==1)
    {numberEventArray.push(num);
    num=0
    flag=0
    }    
    if(operationObj.value=="ans")
        {
            
            if(numberEventArray.length<=1)
            {
                if(numberEventArray.length==0)
                document.getElementById('inputTxt').value=0
                else
                document.getElementById('inputTxt').value=numberEventArray[0]
            }
                else
            {
                console.log(numberEventArray)
                
            result=endResult()
            if(result=="invalid")
                {
                    document.getElementById('inputTxt').value=0
                    alert("Invalid!")
                    
                }
            else
                {console.log("result"+result)
                document.getElementById('inputTxt').value=parseInt(result)
                numberEventArray=[]
                numberEventArray.push(result)
            }
            }
        }       
    else
    {
        numberEventArray.push(operationObj.value);
        switch(operationObj.value)
        {
            case "divide": document.getElementById('inputTxt').value=String.fromCharCode(247)
                            break;
            case "multiply": document.getElementById('inputTxt').value=String.fromCharCode(215)
                            break;
            case "add": document.getElementById('inputTxt').value="+"
                            break;                
        
            case "subract": document.getElementById('inputTxt').value="-"
                            break;
        }
        
    }
        if(operationObj.value=="clear")
        {
           
            numberEventArray=[];
            document.getElementById('inputTxt').value=0
            // numberArray.length=0;
        }
}
function endResult()
{
    if(typeof(numberEventArray[numberEventArray.length-1])!="number")
    {
        return "invalid";
    }
    else
    {
    var addSub=[]
        for(let i=1;i<numberEventArray.length;i++)
        {
            if(numberEventArray[i]==="divide")
            {    numberEventArray[i+1]=(numberEventArray[i-1]/numberEventArray[i+1]);
                i++;
            }
            else if(numberEventArray[i]==="multiply")
            {
                numberEventArray[i+1]=numberEventArray[i-1]*numberEventArray[i+1]
                i++;
            }
            else if(numberEventArray[i]==="subract" || numberEventArray[i]==="add") 
            {
                addSub.push(numberEventArray[i-1])
                addSub.push(numberEventArray[i])
                i++;
            }
            else
                 return "invalid"
        }
        addSub.push(numberEventArray[numberEventArray.length-1])
        
        for(let i=1;i<addSub.length;i++)
        {
          if(addSub[i]==="add")
          {
              addSub[i+1]=addSub[i-1]+addSub[i+1];
              i++;
          }
          if(addSub[i]=="subract")
          {
            addSub[i+1]=addSub[i-1]-addSub[i+1];
            i++;
        }
        }
        return addSub[addSub.length-1];
    }
}

