import {useState} from 'react';

const usePagination = (initialPage, endpoint) => {

    const [currentPage,  setCurrentPage] = useState('');
    const [currentPageData,  setCurrentPageData] = useState('');
    const [loading, setLoading] = useState(false);

    const getPage = x => {
        setLoading(true);
        setCurrentPage(x);
    }

    useEffect(() => {
        axios.get(`/api/${endpoint}/pages/${x}`).then(({data}) => {
            setCurrentPageData(data);
            
        }).finally(() => {
            setLoading(false);
        })
    }, [currentPage])


    return {
        currentPage,
        setCurrentPage,
        currentPageData,
        setCurrentPageData,
        getPage,
        loading
    }


}