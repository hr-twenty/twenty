module.exports =  {
  allowCrossDomain: function(req, res, next){
    res.headers = {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'access-control-allow-headers': 'content-type, accept',
      'access-control-max-age': 10, // Seconds.
      'Content-Type': 'application/json'
    };

    next();
  }
};

