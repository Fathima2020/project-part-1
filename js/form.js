class Form {
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement("h2");
       
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title=createElement("h2");
        title.html("Basketball Game");
        title.position(displayWidth/2-50,0);

       this. input.position(displayWidth/2-40,displayHeight/2-80);
    
        
      this. button.position(displayWidth/2+30,displayHeight/2);
     

      this. button.mousePressed(()=>{
          this.button.hide();
          this.input.hide();
            player.name= this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();

           // greeting.html("WELCOME "+ name1+" "+ name2);

           this. greeting.html("WELCOME "+ player.name);
           this. greeting.position(displayWidth/2-70,displayHeight/4);

        })

       

        
        


        
    }
}