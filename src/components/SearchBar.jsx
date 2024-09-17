import React from 'react'
 
    const SearchBar = ({
        value,
        isLoading,
        handleSubmit,
        onChange
    }) => {

        return (
           <form onSubmit={handleSubmit}>
            <input  
            value={value}
            disabled={isLoading}
            onChange={onChange}
            placeholder='Search Recipes'
            className='form-control'
            />

            <input type="submit" className='btn' value='Search' disabled = {isLoading || !value}/>
           </form>
        )
    }
 
export default SearchBar
