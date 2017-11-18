
export default class FotoServico{
    constructor(resource, quando_erro){
        this._api = resource('v1/fotos{/id}');
        this._quando_erro = quando_erro;
    }

    lista(carregamento){
        this._api
            .query()
            .then(                
                resp => carregamento(resp.body),
                erro => {
                    if(this._quando_erro)
                        this._quando_erro('Erro ao carregar fotos', erro);
                    console.error('FotoServico.lista', erro);
                }
            )
        ;
    }
    porId(id, carregamento){
        this._api
            .get({ id })
            .then(                
                resp => carregamento(resp.body),
                erro => {
                    if(this._quando_erro)
                        this._quando_erro(`Erro ao carregar foto ${ id }`, erro);
                    console.error('FotoServico.lista', erro);
                }
            )
        ;        
    }
    salva(foto, salvamento){
        let _promessa;
        if(foto._id)
            _promessa = this._api.update({ id: foto._id }, foto);
        else
            _promessa = this._api.save(foto);
           
        _promessa.then(
            () => salvamento(),
            erro => {
                if(this._quando_erro)
                    this._quando_erro('Erro ao salvar foto', erro);                    
                console.error('FotoServico.salva', erro);
            }
        );
    }
    deleta(id, delecao){
        this._api
            .delete({ id})
            .then(
                () => delecao(id),
                erro => {
                    if(this._quando_erro)
                        this._quando_erro(`Erro ao deletar foto ${ id }`, erro);
                    console.error('FotoServico.delecao', erro);
                }
            )
        ;            
    }
}