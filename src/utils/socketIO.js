import io from 'socket.io-client';

class Socket {

  constructor(config) {
    this.io = io(config.connection);
    this.store = config.vuex.store;
    this.prefix = config.vuex.prefix;
    this.createSocketsOn();
  }
  
  createSocketsOn(){
    [...Object.keys(this.store._mutations)].forEach(el => {
      if(el.includes(this.prefix)){
        this.io.on(el.substring(this.prefix.length), (data) => {
          this.store.commit(el, data)
        });
      }
    });
  }
}

export default Socket;