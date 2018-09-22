module.exports = function solveEquation(equation) {
	// your implementation
    var arr = equation.split(' ');
    
    var num = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i]!='*' && arr[i]!=' ' && arr[i]!='x^2' && arr[i]!='x')
        num[i]=arr[i];
      
    }
      
    var tmp = [];
    var k=0;
     
    for(var i=0;i<arr.length;i++){
      if(i===0){
      	tmp[k]=arr[i];
      	k++;
      	i++;
      }
      if(arr[i]=='-'){
      	tmp[k]=arr[i+1]*(-1);
      	k++;
      }
      if(arr[i]=='+'){
     	 tmp[k]=arr[i+1]*(+1);
      	k++;
      }
    }
     
    var a=tmp[0];
    var b=tmp[1];
    var c=tmp[2];
     
    D= Math.pow(b,2)-4*a*c;

    var x1 = ((-1)*b - Math.pow(D,1/2))/(2*a);
    var x2 = ((-1)*b + Math.pow(D,1/2))/(2*a);
		 
		x1=x1.toFixed(0);
		x2=x2.toFixed(0);

    var answer = [];
    answer[0]=x1;
    answer[1]=x2;
    
    answer.sort(function(a, b) {
  return a - b;
});
    
  return answer;
}
