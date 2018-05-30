import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import ShareStatus from '../scenes/ShareStatus'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postStatusAsync } from '../actions/statusAction'

class ShareStatusContainer extends Component {
    render() {
        const { isPostStatusSuccess, newStatus, error, postStatus, isLoading } = this.props;
        return (
            <ShareStatus {...this.props} postStatus={(content) => {
                postStatus(content);
            }} />
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        isPostStatusSuccess: state.status.isPostStatusSuccess,
        newStatus: state.status.newStatus,
        error: state.status.error,
        isLoading: state.status.isLoading
    })
}

const mapDispatchToProps = (dispatch) => {
    return { postStatus: bindActionCreators(postStatusAsync, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareStatusContainer);
