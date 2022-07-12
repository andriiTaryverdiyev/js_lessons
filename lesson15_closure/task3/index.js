'use strict';

/**
 * @return {object}
 */
export const createLogger = () => {
    let mem = []
    return {
        warn: function(warnText) {
            let obj = {}
            obj.message = warnText;
            obj.type = 'warn';
            obj.dateTime = new Date()
            mem.push(obj)
        },
        error: function(errorText) {
            let obj = {}
            obj.message = errorText;
            obj.type = 'error';
            obj.dateTime = new Date()
            mem.push(obj)
        },
        log: function(logText) {
            let obj = {}
            obj.message = logText;
            obj.type = 'log';
            obj.dateTime = new Date()
            mem.push(obj)
        },
        getRecords: function(recordType) {
            if (!recordType) {
                return (mem.sort((a, b) => b.dateTime - a.dateTime))
            }

            return (mem.filter((el) => el.type === recordType).sort((a, b) => b.dateTime - a.dateTime) || [])


        }
    }

};

const logger1 = createLogger()
logger1.warn('User is tring to ented restricted page')
logger1.log('User logged out')
logger1.warn('User is tring to ented restricted page')
logger1.warn('User is tring to ented restricted page')
logger1.warn('User is tring to ented restricted page')
logger1.getRecords([])
console.log(logger1.getRecords('log'))
console.log(logger1.getRecords('warn'))
    // examples
    // const logger1 = createLogger();
    // logger1.log('User logged in');
    // logger1.warn('User is tring to ented restricted page');
    // logger1.log('User logged out');
    // logger1.error('Unexpected error on the site');

// logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

// const logger2 = createLogger();
// logger2.warn('Opps, something is happenning');
// logger2.getRecords('error'); // ===> []
// logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

// const logger3 = createLogger();
// logger3.getRecords('error'); // ===> []
// logger3.getRecords(); // ===> []