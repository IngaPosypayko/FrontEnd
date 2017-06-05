
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
    		this.buttonStartField.innerHTML='PAUSE';
    		this.setTime();
    		// this.intervalID=null;
    		this.intervalID=setInterval(this.updateTime.bind(this),1);
    		this.flag='pause';
            break;
    	    }
        
        	case 'pause':{
        	this.timeBeforePause=this.updateTime;
        	console.log(this.intervalID);
             clearInterval(this.intervalID);
             console.log(this.intervalID);
    	     this.flag='continue';
    	     this.buttonStartField.innerHTML='CONTINUE';
    	     break;
             }
        	
        	 case'continue':{
        	 // var timeBeforePause=this.deltaTime;	
             this.setTime();
    		 this.intervalID=setInterval(this.updateTime.bind(this),1);
    	     this.flag='start';
    	     this.buttonStartField.innerHTML='START';
    	      break;
             }

             default:
             alert('Hello!');
        }
    };

    this.stop=function(){
    	// alert('stop!');
    	clearInterval(this.intervalID);

    	this.flag='start';
    };

    this.updateTime=function(){
    	var timeBeforePause=this.deltaTime;
    	this.deltaTime=new Date(Date.now()-this.startTime+this.timeBeforePause);
    	this.updateHTML();
    };

    this.updateHTML=function(){
    	this.timerField.innerHTML=this.deltaTime.getSeconds()+':'+this.deltaTime.getMilliseconds();
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
