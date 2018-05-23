import React, { Component} from 'react';
import './Modal.css';

class Modal extends Component  {
    render (){
        return (
            <div>
                <div className="modal fade" id={this.props.dataTarget} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">{this.props.ModalTitle}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {this.props.ModalDescription}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                                    <button type="button" onClick={this.props.Operation} className="btn btn-primary" data-dismiss="modal">Si</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Modal;
