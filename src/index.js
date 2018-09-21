// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H,Q,D,N,P,h,h_ostatok,q_ostatok,d,d_ostatok,n_ostatok,
	err,object,rez;

	err = {error: "You are rich, my friend! We don't have so much coins for exchange"};
	object = {};
	h = Math.floor(currency/50);
	h_ostatok = currency%50; 
	q_ostatok = h_ostatok%25;
	d = Math.floor(q_ostatok/10);
	d_ostatok = q_ostatok%10;
	n_ostatok = d_ostatok%5;

	if(currency<=0){
		 return object;
	}else if(currency>10000){
		 return  err; 
	}
	if(currency>=50){
		H = h; 
	}if((currency>=25 && currency<50) || h_ostatok>=25 ){
		Q = 1;
	}if(currency<25 && currency>=20){
		D = 2;
	}if(currency<20 && currency>=10){
		D = 1;
	}if(q_ostatok>=10){
		D = d;
	}if((currency<10 && currency>=5)||(d_ostatok<10 && d_ostatok>=5)){
		N = 1;
	}if(currency===4 || n_ostatok===4){
		P = 4;
	}if(currency===3 || n_ostatok===3){
		P = 3;
	}if(currency===2 || n_ostatok===2){
		P = 2;
	}if(currency===1 || n_ostatok===1){
		P = 1;
	}
	rez = {H,Q,D,N,P};
	
	if(rez.H===undefined){
		delete rez.H
	}if(rez.Q===undefined){
		delete rez.Q
	}if(rez.D===undefined){
		delete rez.D
	}if(rez.N===undefined){
		delete rez.N
	}if(rez.P===undefined){
		delete rez.P
	}
	return rez;
}
