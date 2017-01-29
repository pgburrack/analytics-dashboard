'use strict';

let CheckS3Controller = {

  gets3doc: function(ctx, next) {
    let s3Params = {
        Bucket: 'grank-test',
        Key: 'strategies/prediction/default/latest_prediction_strategy.cmp-default-cpa.json'
    }
    console.time('gets3doc');
    global.S3.downloadBuffer(s3Params)
          .on('error', (err) => {
            console.log(err);
          })
          .on('end', (buffer) => {
             console.log(JSON.parse(buffer.toString('utf-8')));
             console.timeEnd('gets3doc');
          });
    ctx.status = 200;
    ctx.body = 'hello';
  }
}

module.exports = CheckS3Controller;

