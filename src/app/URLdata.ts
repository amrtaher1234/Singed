

export class URLdata{

   public phone : string; 
   public url : string; 
   public valid : string; 
   public local_format :string; 
   public international_format : string; 
   public country_prefix : string; 
   public country_code : string; 
   public country_name : string; 
   public location : string; 
   public carrier : string ; 
   public line_type : string; 

    constructor( )
    {

    }

    getDataAsArray()
    {
        return {
            'valid' : this.valid,
            'local format' : this.local_format , 
            'international  format' : this.international_format , 
            'country prefix' : this.country_prefix , 
            'location' : this.location , 
            'carrier' : this.carrier , 
            'line type'  : this.line_type,
            'country name' : this.country_name , 

        };
    }
    

    
}