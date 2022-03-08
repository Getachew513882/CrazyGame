var __computer__playing__card__container = [];
var __human__playing__card_container = [];
var __droped_cards__from__both__computer__and__human__container  = [];
var __lefted__cards = [];
var __does__human__lefted__one__card__only = false;
var __list__of__plyaing__cards;
var __margin__left__of__the__human__playing__cards = -400;
var __Zindex = 0, __default__margin__left = 0, __updated__Zindex;
var __top__of__the__stack,__amount__of__cards__to__punish = 0;

var __playing__cards__container = [
	   "Assets/PNG/AF.png","Assets/PNG/AH.png","Assets/PNG/AD.png","Assets/PNG/AS.png",
	   "Assets/PNG/2F.png","Assets/PNG/2H.png","Assets/PNG/2D.png","Assets/PNG/2S.png",
	   "Assets/PNG/3F.png","Assets/PNG/3H.png","Assets/PNG/3D.png","Assets/PNG/3S.png",
	   "Assets/PNG/4F.png","Assets/PNG/4H.png","Assets/PNG/4D.png","Assets/PNG/4S.png",
	   "Assets/PNG/5F.png","Assets/PNG/5H.png","Assets/PNG/5D.png","Assets/PNG/5S.png",
	   "Assets/PNG/6F.png","Assets/PNG/6H.png","Assets/PNG/6D.png","Assets/PNG/6S.png",
	   "Assets/PNG/7F.png","Assets/PNG/7H.png","Assets/PNG/7D.png","Assets/PNG/7S.png",
	   "Assets/PNG/8F.png","Assets/PNG/8H.png","Assets/PNG/8D.png","Assets/PNG/8S.png",
	   "Assets/PNG/9F.png","Assets/PNG/9H.png","Assets/PNG/9D.png","Assets/PNG/9S.png",
	   "Assets/PNG/TF.png","Assets/PNG/TH.png","Assets/PNG/TD.png","Assets/PNG/TS.png",
	   "Assets/PNG/JF.png","Assets/PNG/JH.png","Assets/PNG/JD.png","Assets/PNG/JS.png",
	   "Assets/PNG/QF.png","Assets/PNG/QH.png","Assets/PNG/QD.png","Assets/PNG/QS.png",
	   "Assets/PNG/KF.png","Assets/PNG/KH.png","Assets/PNG/KD.png","Assets/PNG/KS.png",
	   ];

	//getting the image name and alert it
	//alert(__playing__cards__container[0].split("/").pop().split(".")[0].length);

    //shuffling the playing cards.
    for (var i = __playing__cards__container.length - 1; i >= 0; i--) {
    	var index = Math.floor(Math.random() * 52);
    	[__playing__cards__container[i],__playing__cards__container[index]] = [__playing__cards__container[index],__playing__cards__container[i]];
    }


	function verifyLeftingOneCardOnly() {

		if (document.getElementById('checkedforleft1').checked) {
			doeshumanleftonecardonly = true;
		}

		else
			doeshumanleftonecardonly = false;
	}

	function initializeTheCards()
	{
		   var the_parent_element = document.getElementById("playingcardleft");
		   for (var j = 0; j <= 51; j++) {
			   	var imageelement = document.createElement("img");
			   	imageelement.src = __playing__cards__container[j];
			   	imageelement.className = "playingcardimages" + j;
				imageelement.setAttribute('id', 'playingcardsuniqueid');
			   	imageelement.style.width = "60px";
				imageelement.style.position = "absolute";
			   	imageelement.style.height = "80px";
			   	imageelement.style.__Zindex = j + 1;
				imageelement.style.cursor = 'pointer';
			   	the_parent_element.appendChild(imageelement);
		   }
		   //getting total length of the items from the div elements 
		   	var totallength = $('.playingcardleft img').length;
			setTimeout(() =>
			{
					__list__of__plyaing__cards = document.getElementById("playingcardleft");
					__list__of__plyaing__cards = __list__of__plyaing__cards.querySelectorAll("img");
					//totalsize = document.getElementById("humanplayingcardcontainer").querySelectorAll("img").length;
					dividingAllTheCardsToComputerAndHuman(totallength-1);
			},1500);
	}

	function increaseTheMarginLeftOfThePlayingCards(margin_left)
	{
			margin_left = margin_left + 10;
			return margin_left;
	}

	function dividingAllTheCardsToComputerAndHuman(__lefted__cards_length)
	{
			//means that the computer will dividing the playing cards to the computer and human for the fisttime
			if (__lefted__cards_length >= 47){

				$("." + __list__of__plyaing__cards[__lefted__cards_length].className).animate({
					bottom : '-10px',
					top : '-3px',
					left : '-630px',
				},1000);

				//if you want to remove the fist element of the div element using javascript you can use this method parent.removeChile(firstChile);
				
				// this helps us to remove a child element from the last of its parent element			
				//document.getElementById("playingcardleft").removeChild(document.getElementById("playingcardleft").lastElementChild);
				setTimeout(() => 
				{
						dividingAllTheCardsToComputerAndHuman(--__lefted__cards_length);
						setTimeout(() => {
							   
							  //adding the images name to the array containing 
							  __computer__playing__card__container.push(__list__of__plyaing__cards[__lefted__cards_length].src);
							  
							  //updating the child element left and bottom property
							  var the_new_element = __list__of__plyaing__cards[__lefted__cards_length];
							      the_new_element.style.left = "0px";
								  the_new_element.style.top = "0px";
							
							  //appending the child element to the new parent  
							  document.getElementById('computerplayingcards').appendChild(the_new_element);

							//   //remove the child element from the child element from the parent element
							//   document.getElementById("playingcardleft").removeChild(document.getElementById("playingcardleft").lastElementChild);			
							
						},2000);
				},800);
			}
			
			//now draw the cards for human playing cards
			else if(__lefted__cards_length >= 42)
			{
				$("." + __list__of__plyaing__cards[__lefted__cards_length].className).animate({
					left : __margin__left__of__the__human__playing__cards + "px",
					top : '305px'
				},1000);

				//increase the default margin left of the child element 
				__margin__left__of__the__human__playing__cards = increaseTheMarginLeftOfThePlayingCards(__margin__left__of__the__human__playing__cards + 10);
				
				
				setTimeout(() =>
				{				
					dividingAllTheCardsToComputerAndHuman(--__lefted__cards_length);
					setTimeout(() => 
					{		
							//getting the __Zindex and marign left of the new element to be rendered
							var __Zindex_and_margin_info_container = returnThe__ZindexAndMarginLeft(__Zindex,__default__margin__left);
							
							//adding the images name to the array containing 
							__human__playing__card_container.push(__list__of__plyaing__cards[__lefted__cards_length].src);
							
							//updating the child element of the left and bottom property
							var the_new_element = __list__of__plyaing__cards[__lefted__cards_length];
							 	the_new_element.style.__Zindex = __Zindex_and_margin_info_container[0];
								the_new_element.style.left =  __Zindex_and_margin_info_container[1] + "px";
								the_new_element.style.top = "0px";
								the_new_element.setAttribute('onclick', 'moveHuman(this)');
							
								// //remove the child element  from the parent element
								// document.getElementById("playingcardleft").removeChild(document.getElementById("playingcardleft").lastElementChild);			
							
								//appending the child element to the new parent  
								document.getElementById('humanplayingcardcontainer').appendChild(the_new_element);
					},2000);

			   },800);
			}

			else{

				setTimeout(() =>
				{
					 moveComputer("firsttime");
				},3000);
				return;
			}
	}

	function returnThe__ZindexAndMarginLeft(temp__Zindex, temp__default__margin__left)
	{
		temp__Zindex++;
		__Zindex = temp__Zindex;
		temp__default__margin__left += 20;
		__default__margin__left = temp__default__margin__left;
		var index_and_margin_container=[];
		index_and_margin_container.push(temp__Zindex);
		index_and_margin_container.push(temp__default__margin__left);
		return index_and_margin_container;
	}

	function moveComputer(when_will_computer_move)
	{
		var the_higest_repeated_item_index = getTheHighestRepeatedValueOfPlayingCard();
		var the_current_index_to_move = the_higest_repeated_item_index;

		if (when_will_computer_move == "firsttime") {
			__top__of__the__stack = document.getElementById("computerplayingcards").querySelectorAll("img")[the_higest_repeated_item_index].src.split("/").pop().split(".")[0];
			document.getElementById("toastmessage").style.transform = "scaleX(1)";
			$("." + document.getElementById('computerplayingcards').querySelectorAll("img")[the_current_index_to_move].className).animate({
				left : '330px',
			},1000);
		}

		else{
				//now time to move the computer
				var index = 0;
				__computer__playing__card__container.forEach(element => {
					if (element.search(__top__of__the__stack)) {
						index++;
						return;
					}
				});
				//meant that there is no card to move, we should add a card to a computer 
				if (index <= 0) {
					//executed if computer have a card to move
					if(checkIfComputerHaveCardToMove())
					{
							

					}
				}

				else
				{

				}
		    }

			setTimeout(() => 
			{
				document.getElementById("toastmessage").style.transform = "scaleX(0)";
				//__droped_cards__from__both__computer__and__human__container.push(__computer__playing__card__container[the_current_index_to_move].split("/").pop().split(".")[0]);
				var the_new_child = document.getElementById('computerplayingcards').querySelectorAll("img")[the_current_index_to_move];
				the_new_child.style.left = '0px';
				the_new_child.style.top = '0px';
				the_new_child.style.__Zindex = document.getElementById("stackfordropedcards").querySelectorAll("img").length
				document.getElementById("stackfordropedcards").appendChild(the_new_child);
				alert(document.getElementById('computerplayingcards').querySelectorAll("img").length);
				//document.getElementById('computerplayingcards').removeChild(document.getElementById('computerplayingcards').querySelectorAll("img")[the_current_index_to_move]);
				checkIfHumanHaveCardToMove();
			},3000);

	}

	function punishPlayingCardToComputer(__lefted__cards_length){
		if (__amount__of__cards__to__punish > 0) {
			$("." + __list__of__plyaing__cards[__lefted__cards_length].className).animate({
				bottom : '-10px',
				top : '-3px',
				left : '-630px',
			},1000);

		//document.getElementById("playingcardleft").removeChild(document.getElementById("playingcardleft").lastElementChild);
		setTimeout(() => 
		{
				__amount__of__cards__to__punish--;
				punishPlayingCardToComputer(--__lefted__cards_length);
				setTimeout(() => {
					   
					  //adding the images name to the array containing 
					  __computer__playing__card__container.push(__list__of__plyaing__cards[ __lefted__cards_length].src);
					  
					  //updating the child element left and bottom property
					  var the_new_element = __list__of__plyaing__cards[ __list__of__plyaing__cards.length - 1 ];
						  the_new_element.style.left = "0px";
						  the_new_element.style.top = "0px";
					
					  //appending the child element to the new parent  
					  document.getElementById('computerplayingcards').appendChild(the_new_element);

					//   //remove the child elemen from the parent element
					//   document.getElementById("playingcardleft").removeChild(document.getElementById("playingcardleft").lastElementChild);			
					
				},2000);
		},800);
	}
}

	function moveHuman(incommingplayingcard)
	{	
		var found = false;
		if((incommingplayingcard.src.split("/").pop().split(".")[0].charAt(1) != __top__of__the__stack.charAt(1) && incommingplayingcard.src.split("/").pop().split(".")[0].charAt(0) != __top__of__the__stack.charAt(0)) &&
		(incommingplayingcard.src.split("/").pop().split(".")[0].charAt(0) != "8" && incommingplayingcard.src.split("/").pop().split(".")[0].charAt(0) != "J"))
		{
			//produce a crazy sound from the system
			let speech = new SpeechSynthesisUtterance();
			speech.lang = "en-US";
			speech.text = "Crazy";
			speech.volume =1;
			speech.rate = 1;
			speech.pitch = 1;
			window.speechSynthesis.speak(speech);

			//now punish the human by getting the total length of the remaining playing card	
			var __total__length = $('.playingcardleft img').length;
			__amount__of__cards__to__punish = 5;
			punishTheHuman(__total__length);
		}

		else
		{
			//if a user has clicked any of the 8 or j plyaing card the computer should be able to perform the choose option for the player
			if (incommingplayingcard.src.split("/").pop().split(".")[0].charAt(0) == "8" || incommingplayingcard.src.split("/").pop().split(".")[0].charAt(0) == "J") {
				document.getElementById('chooser').style.transform = "scaleX(1)";
				document.getElementById('chooser').style.transition = "1s";
			}
			
			var __top__of__the__stack_index;
			var all_images_for_human = document.getElementById("humanplayingcardcontainer").querySelectorAll("img");
			for (let index = 0; index < all_images_for_human.length; index++) {
				if ( incommingplayingcard.className == all_images_for_human[index].className )
				 {
					found = true;
					__top__of__the__stack_index = index;
					break;
				}	
			}

			if (found) {
				__top__of__the__stack = document.getElementById("humanplayingcardcontainer").querySelectorAll("img")[__top__of__the__stack_index].src.split("/").pop().split(".")[0];
				incommingplayingcard.style.left = "0px";
				incommingplayingcard.style.top = "0px";
				incommingplayingcard.style.bottom ="0px";
				incommingplayingcard.removeAttribute("click");
				incommingplayingcard.style.__Zindex = document.getElementById("stackfordropedcards").querySelectorAll("img").length + 1;
				document.getElementById("stackfordropedcards").appendChild(incommingplayingcard);
				
				if (__top__of__the__stack.charAt(0) != "5") {
					moveComputer("notfirsttime");	
				}
			    //document.getElementById('humanplayingcardcontainer').removeChild(document.getElementById('humanplayingcardcontainer').querySelectorAll("img")[__top__of__the__stack_index]);	
			}
		}
	}
	
	function getTheHighestRepeatedValueOfPlayingCard()
	{
		var highest_repeated_value = 1, highest_repeated_playing_index = 0, highestrepeated = 1, tempindex;
		for (let i = 0; i <= __computer__playing__card__container.length-2; i++) {
			for (let j = i + 1; j < __computer__playing__card__container.length; j++) {

				if(__computer__playing__card__container[i].split("/").pop().split(".")[0].charAt(1) == __computer__playing__card__container[j].split("/").pop().split(".")[0].charAt(1)) {
					highestrepeated++;
					tempindex = i;
					//__computer__playing__card__container.splice(j,1);
				}
			}
			if (highestrepeated > highest_repeated_value) {
				height_repeated_value = highestrepeated;
				highest_repeated_playing_index = tempindex;
			}
			tempindex  = 0;
			highestrepeated = 1;
		}
		//now remove that element from the current computer playing card container.
		__computer__playing__card__container.splice(highest_repeated_playing_index,1);
		return highest_repeated_playing_index;
	}

	function punishTheHuman(__lefted__cards_length)
	{
		var should_computer_move = false;
		if (__amount__of__cards__to__punish > 0){
			$("." + __list__of__plyaing__cards[__lefted__cards_length].className).animate({
				top : '305px'
			},1000);

	    if (__amount__of__cards__to__punish == 5) {
			should_computer_move = true;
		}
			setTimeout(() => {
				__amount__of__cards__to__punish--;
				punishTheHuman(--__lefted__cards_length);
				setTimeout(() => {
					var __Zindex_and_margin_info_container = returnThe__ZindexAndMarginLeft(__Zindex,__default__margin__left);
					__human__playing__card_container.push(__list__of__plyaing__cards[__lefted__cards_length].src);
					
					//updating the child element of the left and bottom property
					var the_new_element = __list__of__plyaing__cards[__lefted__cards_length];
					the_new_element.style.__Zindex = __Zindex_and_margin_info_container[0];
					the_new_element.style.left =  __Zindex_and_margin_info_container[1] + "px";
					the_new_element.style.top = "0px";
					the_new_element.setAttribute('onclick', 'moveHuman(this)');

				    //appending the child element to the new parent  
				    document.getElementById('humanplayingcardcontainer').appendChild(the_new_element);

				    // //remove the child element  from the parent element
				    // document.getElementById("playingcardleft").removeChild(document.getElementById("playingcardleft").lastElementChild);			
				}, 2000);

			}, 800);
		}

		else
		{
			if (should_computer_move) {
				moveComputer("notfirsttime");
			}
		}
	}

	function checkIfHumanHaveCardToMove() {
		var found = false;
		var total_playing_card = document.getElementById("humanplayingcardcontainer").querySelectorAll("img");
		for (let index = 0; index < total_playing_card.length; index++){
			if (__top__of__the__stack.charAt(0) == total_playing_card[index].src.split("/").pop().split(".")[0].charAt(0) || __top__of__the__stack.charAt(1) == total_playing_card[index].src.split("/").pop().split(".")[0].charAt(1)) {
				found = true;
				break;
			}
		}

			//means that the human have a card to move so we should return from the function
			if(!found)
			{
				var totallength = $('.playingcardleft img').length;
				__amount__of__cards__to__punish = 1;
				//add one playing card to human container 
				punishTheHuman(totallength - 1);

				//check if it aslo have no card to move
				setTimeout(() => {
					checkIfHumanHaveCardToMove();
				}, 4000);
			}
	}

	function checkIfComputerHaveCardToMove() {
		var found = false;
		var total_playing_card = document.getElementById("computerplayingcards").querySelectorAll("img");
		for (let index = 0; index < total_playing_card.length; index++){
			if (__top__of__the__stack.charAt(0) == total_playing_card[index].src.split("/").pop().split(".")[0].charAt(0) || __top__of__the__stack.charAt(1) == total_playing_card[index].src.split("/").pop().split(".")[0].charAt(1) || total_playing_card[index].src.split("/").pop().split(".")[0].charAt(0) == "8" ||  __top__of__the__stack.charAt(1) == total_playing_card[index].src.split("/").pop().split(".")[0].charAt(1) || total_playing_card[index].src.split("/").pop().split(".")[0].charAt(0) == "J") {
				found = true;
				break;
			}
		}
			
			if(!found)
			{
				var totallength = $('.playingcardleft img').length;
				__amount__of__cards__to__punish = 1;
				//add one playing card to human container 
				punishPlayingCardToComputer(totallength - 1);

				//check if it aslo have no card to move
				setTimeout(() => {
					checkIfComputerHaveCardToMove();
				}, 4000);
			}

			//means that the human have a card to move so we should return from the function
			else
			return found;
	}