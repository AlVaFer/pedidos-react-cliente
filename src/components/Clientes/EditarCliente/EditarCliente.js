import React, { Component, Fragment } from 'react'
import { CLIENTE_QUERY } from './../../../queries';
import { Query } from 'react-apollo';

import FormularioEditarCliente from './FormularioEditarCliente/FormularioEditarCliente';

class EditarCliente extends Component {
    render() {

        // ID del Cliente al editar
        const { id } = this.props.match.params;        

        return (
            <Fragment>
                <h2 className="text-center">Editar Cliente</h2>

                <div className="row justify-content-center">
                    <Query query={CLIENTE_QUERY} variables={{id}}>
                        {({ loading, error, data, refetch }) => {
                            if(loading) {
                                return 'Cargando...'
                            }
                            if(error) {
                                return `Error! ${error.message}`
                            }
                            // console.log(this.props);
                            

                            return (
                                <FormularioEditarCliente
                                    cliente={data.getCliente}
                                    refetch={refetch} />
                            )
                            
                        }}
                    </Query>
                </div>

            </Fragment>
        )
    }
}

export default EditarCliente;