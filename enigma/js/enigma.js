function Enigma(string){
            this.alphabet  = "abcdefghijklmnopqrstuvwxyz '.,:;";
            this.message_encrypt = "wjuwmujfyp";
            this.position = [];
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

            this.decrypt = function(){
                  var res = '';
                  var index = '';
                  for(var i =0;i< message_encrypt.length;i++){
                    index = position[message_encrypt.charAt(i)];
                    res += message_encrypt.charAt(i).replace(message_encrypt.charAt(i),alphabet.charAt(index));
                    
                  }
                  return this.res;
            }
            
          }
