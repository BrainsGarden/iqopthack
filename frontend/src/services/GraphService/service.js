import * as API from '../../api';
import BaseService from '../BaseService';

import fakeRootData from './fake-root.json';
import fakeItems from './fake-get-items.json';

class GraphService extends BaseService {
    static getRoot() {
        return this.getForDepth('root', 5);
        // return new Promise((resolve, reject) => {
        //     // resolve(fakeRootData);
        //     API.Graph.getRoot()
        //         .then(this.chekcStatus)
        //         .then(this.parseJSON)
        //         .then((result) => {
        //             resolve(result);
        //         })
        //         .catch((error) => {
        //             reject(error);
        //         });
        // });
    }

    static getItems(ids) {
        return new Promise((resolve, reject) => {
            // resolve(fakeItems);
            API.Graph.getItems(ids)
                .then(this.checkStatus)
                .then(this.parseJSON)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static getForDepth(id, depth) {
        return new Promise((resolve, reject) => {
            API.Graph.getForDepth(id, depth)
                .then(this.checkStatus)
                .then(this.parseJSON)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }
}

export default GraphService;
