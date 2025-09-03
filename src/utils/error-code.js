const ClientErrors = Object.freeze({
    BAD_REQUEST :400,
    UNAUTHORISED :401,
    NOT_FOUND :404,
});


const ServerErrors = Object.freeze({
    INTERAL_ERROR : 500,
    NOT_IMPLEMENTED:501,
});

const SuccesCode = Object.freeze({
    OK :200,
    CREATED :201
});

module.exports ={
    ClientErrors,
    ServerErrors,
    SuccesCode
}