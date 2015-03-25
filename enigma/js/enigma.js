 var  Enigma = function(){
            this.crypt  = "jdwovarig xunsyqcp'fmztkhbel.,:;";
            this.alphabet  = "abcdefghijklmnopqrstuvwxyz '.,:;";
            this.encrypt = function(message){
                  var message_decrypt = message;
                  var result = '';
                  var index = '';
                  var position = [];
                  position['a'] = 0;                          
                  position['b'] =1;
                  position['c'] =2;
                  position['d'] =3;
                  position['e'] =4;
                  position['f'] =5;
                  position['g'] =6;
                  position['h'] =7;
                  position['i'] =8;
                  position['j'] =9;
                  position['k'] =10;
                  position['l'] =11;
                  position['m'] =12;
                  position['n'] =13;
                  position['o'] =14;
                  position['p'] =15;
                  position['q'] =16;
                  position['r'] =17;
                  position["s"] =18;
                  position['t'] =19;
                  position['u'] =20;
                  position['v'] =21;
                  position['w'] =22;
                  position['x'] =23;
                  position['y'] =24;
                  position['z'] =25;
                  position[' '] =26;
                  position["'"] =27;
                  position['.'] =28;
                  position[','] =29;
                  position[':'] =30;
                  position[';'] =31;

                  for(var i =0;i< message_decrypt.length;i++){
                    index = position[message_decrypt.charAt(i)];
                    result += message_decrypt.charAt(i).replace(message_decrypt.charAt(i),this.crypt.charAt(index));
                    
                  }
                  return result;
            }

            this.decrypt = function(message){
                  var message_encrypt = message;
                  var result = '';
                  var index = '';
                  var position = [];
                  position['j'] = 0;                          
                  position['d'] =1;
                  position['w'] =2;
                  position['o'] =3;
                  position['v'] =4;
                  position['a'] =5;
                  position['r'] =6;
                  position['i'] =7;
                  position['g'] =8;
                  position[' '] =9;
                  position['x'] =10;
                  position['u'] =11;
                  position['n'] =12;
                  position['s'] =13;
                  position['y'] =14;
                  position['q'] =15;
                  position['c'] =16;
                  position['p'] =17;
                  position["'"] =18;
                  position['f'] =19;
                  position['m'] =20;
                  position['z'] =21;
                  position['t'] =22;
                  position['k'] =23;
                  position['h'] =24;
                  position['b'] =25;
                  position['e'] =26;
                  position['l'] =27;
                  position['.'] =28;
                  position[','] =29;
                  position[':'] =30;
                  position[';'] =31;

                  for(var i =0;i< message_encrypt.length;i++){
                    index = position[message_encrypt.charAt(i)];
                    result += message_encrypt.charAt(i).replace(message_encrypt.charAt(i),this.alphabet.charAt(index));
                    
                  }
                  return result;
            }
}