 module.exports = {
                   async pre(ctx:any) {
                                       ctx.body = 'Hello, world!';
                                       },
                   async post(ctx:any) {
                                       ctx.body = 'I am fine, thank you!';
                                      },
                 };