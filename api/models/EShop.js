/**
 * Created by RMMHK on 9/4/2016.
 */
module.exports= {


  attributes: {

    ES_NAME: {
      type: 'string',

    },

    ES_STATUS: {
      type: 'boolean',
      defaultsTo: 'false'
    },
    ES_REG_DATE: {
      type: 'date'
    },
    ES_LOCATION: {
      type: 'string'
    },

    ES_BLOCK: {
      type: 'boolean',
      defaultsTo: 'false'
    },
/*
   Owner: {

      model:'user',
     unique:true
    }*/
  }
};
