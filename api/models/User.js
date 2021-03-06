/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {

    //USER MODEL
  	name: {
  		type :'string',
  		required: true

  	},

  	cell: {
  		type :'string',
  		required: true,
  		unique: true
  	},

     email: {
     	type:'string',
     	email: true,
     	required: true,
     	unique: true
     },
      cnic://ID card
     {
     	type:'integer'
     },

     f_status://fraud status
     {
     	type:'boolean'
     },
     f_warnings://fraud warnings

     {
     	type:'integer'
     },

    current_location://location through GPS
    {
    	type:'string'
    },

    v_id:
    {
      type:'string',
      unique:true
    },
  /*  account_secret:
    {
      required:true,
      type:'string'
    },*/

EShop:{
  model:'EShop',
  unique:false
}

 /* toJSON: function() {

var obj = this.toObject();

      }*/
  }
};

