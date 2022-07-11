const jwt = require('jsonwebtoken');

module.exports.templateTags = [{
    name: 'flexibleJWT',
    displayName: 'Flexible JWT',
    description: 'Generates a JWT token',
    args: [
        {
            displayName: 'JSON Payload',
            type: 'string',
            placeholder: /* JWT example */ '{\n"iss": "https://example.com",\n"sub": "1234567890",\n"aud": "https://example.com",\n"exp": "1409547200",\n"iat": "1409547200"}',
            defaultValue: '{}'
        },
        {
            displayName: 'Secret',
            type: 'string',
            placeholder: 'Secret',
            defaultValue: ''
        }
    ],

    async run(context, payload, secret, isBase64) {
        return jwt.sign(
            payload,
            secret,
            { 
                algorithm: 'HS256',
                header: { typ: 'JWT', alg: 'HS256' }
            }
        );
    }
}];