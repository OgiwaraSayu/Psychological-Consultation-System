import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const fetchData2 = query => {
    return request({
        url: './table2.json',
        method: 'get',
        params: query
    });
};

export const fetchData3 = query => {
    return request({
        url: './table3.json',
        method: 'get',
        params: query
    });
};

