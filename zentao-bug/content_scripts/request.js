// 命名空间
let ajax_interceptor = {
  originalXHR: window.XMLHttpRequest,
  myXHR: function () {
    const modifyResponse = () => {
      if (this.responseURL?.includes('/max/message-ajaxGetMessage-0.html')) {
        window.postMessage({ type: "bugNew", value: [] });
      }
    };

    const xhr = new ajax_interceptor.originalXHR();
    for (let attr in xhr) {
      if (attr === "onreadystatechange") {
        xhr.onreadystatechange = (...args) => {
          if (this.readyState == 4) {
            // 请求成功,开启拦截
            console.log(this.responseURL);
            modifyResponse();
          }
          this.onreadystatechange && this.onreadystatechange.apply(this, args);
        };

        this.onreadystatechange = null;
        continue;
      } else if (attr === "onload") {
        xhr.onload = (...args) => {
          // 请求成功,开启拦截
          modifyResponse();
          this.onload && this.onload.apply(this, args);
        };

        this.onload = null;
        continue;
      }

      if (typeof xhr[attr] === "function") {
        this[attr] = xhr[attr].bind(xhr);
      } else {
        // responseText和response不是writeable的，但拦截时需要修改它，所以修改就存储在this[`_${attr}`]上
        if (attr === "responseText" || attr === "response") {
          Object.defineProperty(this, attr, {
            get: () =>
              this[`_${attr}`] == undefined ? xhr[attr] : this[`_${attr}`],
            set: (val) => (this[`_${attr}`] = val),
            enumerable: true,
          });
        } else {
          Object.defineProperty(this, attr, {
            get: () => xhr[attr],
            set: (val) => (xhr[attr] = val),
            enumerable: true,
          });
        }
      }
    }
  },
};

window.XMLHttpRequest = ajax_interceptor.myXHR;
