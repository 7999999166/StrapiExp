    module.exports = {
       routes: [
       {
        method: 'GET',
        path: '/pretransaction',
        handler: 'custom.pre', 
       },
       {
        method: 'GET',
        path: '/orders/posttransaction',
        handler: 'custom.post', 
       },
      ],
    };