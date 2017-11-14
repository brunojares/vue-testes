import Vue from 'vue';

Vue.directive('drv-transforma',{
    bind(elemento, binding, vnode){
        let _angulo = 0;
        elemento.addEventListener('dblclick', function(){
            _angulo += 90;
            if(_angulo >= 360)
                _angulo = 0;
            elemento.style.transform = `rotate(${_angulo}deg)`;
        });
    }
});