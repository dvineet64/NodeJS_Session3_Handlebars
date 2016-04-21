exports.home=function(req,res){
  res.render('home',{title:'MyCity',
                    headline:'We believe that every city have something to say'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageArray=[1,2,3,4];

    if(cityName==='Bengaluru'){
       title="Bengaluru";
       heading="Bengaluru: IT Capital of India";
    }
    else if(cityName==='Chennai'){
       title="Chennai";
       heading="Chennai: Gateway of South India";
    }
    else if(cityName==='Delhi'){
       title="Delhi";
       heading="Delhi: City of Rallies";
    }
    else if(cityName==='Kolkata'){
       title="Kolkata";
       heading="Kolkata: City of Palaces";
    }
    else if(cityName==='Mumbai'){
       title="Mumbai";
       heading="Mumbai: City of Slums and Skyscrapers";
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        imageArray:imageArray});
  }
