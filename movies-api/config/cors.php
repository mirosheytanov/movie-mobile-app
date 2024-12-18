<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Configuration
    |--------------------------------------------------------------------------
    |
    | This option defines the CORS settings for your application.
    | You can enable and configure CORS for your API routes here.
    |
    */

    'paths' => ['api/*'], // Allow CORS on all routes starting with api/

    'allowed_methods' => ['*'], // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)

    'allowed_origins' => ['*'], // Allow all origins (change it to specific origins in production)
    
    'allowed_headers' => ['*'], // Allow all headers
    
    'exposed_headers' => [],
    
    'max_age' => 0, // Cache CORS settings for 0 seconds
    
    'supports_credentials' => false, // Disable credentials (cookies, authorization headers)
];
