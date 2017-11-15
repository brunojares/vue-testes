import Vue from 'vue';

Vue.directive('drv-transforma',{
    bind(elemento, binding, vnode){
        let _anguloCalculado = 0;    
        elemento.addEventListener('dblclick', function(){
            let _anguloParametro = 90;
            let _intervalo = 0.5;            
            if(binding.value){
                _anguloParametro = binding.value.angulo || 90;
                _intervalo = binding.value.intervalo || 0.5;
            }
            //...
            _anguloCalculado += _anguloParametro;
            //======
            elemento.style.transition = `transform ${_intervalo}s`;
            elemento.style.transform = `rotate(${_anguloCalculado}deg)`;
        });
    }
});