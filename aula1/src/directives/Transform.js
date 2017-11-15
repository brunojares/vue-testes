import Vue from 'vue';

Vue.directive('drv-transforma',{
    bind(elemento, binding, vnode){
        let _valor = 0;    
        elemento.addEventListener('dblclick', function(){
            let _valorParametro = 0;
            let _intervaloParametro = 0.5;
            if(!binding.arg || binding.arg == 'rotaciona')
            {
                _valorParametro = 90;
            }
            if(binding.value)
            {
                _valorParametro = binding.value.valor || 90;                
                _intervaloParametro = binding.value.intervalo || 0.5;
            }
            //...
            if(!binding.arg || binding.arg == 'rotaciona')
            {
                if(binding.modifiers.reverso)
                    _valor -= _valorParametro;
                else
                    _valor += _valorParametro;
            }else{
                if(binding.modifiers.reverso)
                _valor = -_valorParametro;
                else
                    _valor = _valorParametro;                
            }                
            //...
            let _efeito = '';
            if(!binding.arg || binding.arg == 'rotaciona')
                _efeito = `rotate(${_valor}deg)`;
            else
                _efeito = `scale(${_valor})`;
            //...
            if(_intervaloParametro > 0)
                elemento.style.transition = `transform ${_intervaloParametro}s`;
            elemento.style.transform = _efeito;
            console.log(_efeito);
        });
    }
});