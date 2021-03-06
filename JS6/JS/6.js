
'use strict'


function Timer(){
	this.buttonStartField={};
	this.timerField={};
	this.intervalID=null;
	this.timeBeforePause=0;
	this.flag='start';
	this.deltaTime=0;
    
	this.startTime=0;

	this.createEvent=function(){
		var buttonStart=document.querySelector('.button1');
		buttonStart.addEventListener('click',this.start.bind(this));
		var buttonStop=document.querySelector('.button2');
		buttonStop.addEventListener('click',this.stop.bind(this));
        this.timerField=document.querySelector('.timer');
        this.buttonStartField=document.querySelector('.button1');
        console.log(this.buttonStartField);

	};

    this.start=function(){
    	// alert('start!');
    	switch (this.flag) {
    	    case 'start':{
    	    this.timeBeforePause=0;	
    		this.buttonStartField.innerHTML='PAUSE';
    		this.setTime();
    		 clearInterval(this.intervalID);
    		this.intervalID=setInterval(this.updateTime.bind(this),1);
    		this.flag='pause';
            break;
    	    }
        
        	case 'pause':{
             this.timeBeforePause=Date.now()-this.startTime;
             clearInterval(this.intervalID);
    	     this.flag='continue';
    	     this.buttonStartField.innerHTML='CONTINUE';
    	     break;
             }
        	
        	 case'continue':{	
             this.setTime();  
    		 this.intervalID=setInterval(this.updateTime.bind(this),1);
    	     this.flag='pause';
    	     this.buttonStartField.innerHTML='PAUSE';
    	      break;
             }

             default:
             alert('Hello!');
        }
    };

    this.stop=function(){
    	clearInterval(this.intervalID);
        this.deltaTime=0;
        this.timerField.innerHTML='00:00:000';
        this.buttonStartField.innerHTML='START';
        this.flag='start';
    };

    this.updateTime=function(){
    	this.deltaTime=new Date(Date.now()-this.startTime+this.timeBeforePause);
    	this.updateHTML();
    };


    this.updateHTML=function(){
    	var minutes=this.deltaTime.getMinutes();
    	var seconds=this.deltaTime.getSeconds();
    	  if (seconds<10) seconds="0"+seconds;
    	var milliseconds=this.deltaTime.getMilliseconds();
    	   if (milliseconds<10) milliseconds="00"+milliseconds;
    	   else if((milliseconds>9)&&(milliseconds<100)) milliseconds="0"+milliseconds;
    	this.timerField.innerHTML=minutes+':'+seconds+':'+milliseconds;
    };

    this.setTime=function(){
    	this.startTime=Date.now();
    };



	this.init=function(){	
       this.createEvent();
	}

};

var timer1=new Timer();
console.log(timer1);
timer1.init();
