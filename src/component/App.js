import React from "react";
import Addlink from './Addlink'
import Search from './Search'
import Linklist from './Linklist'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const parsedLinks = JSON.parse(localStorage.getItem('links'))
    console.log(parsedLinks);

    this.state = {
      links: parsedLinks,
      search: ""
    }
  }

  onSearch = (search) => {
    this.setState({
      search: search,
    })

  }

  addLinkHandler = (link) => {

    const linkList = this.state.links.concat(link)
    console.log(linkList);
    this.setState({
      links: linkList,
    });
    console.log("this.state.links", this.state.links);
    localStorage.setItem("links", JSON.stringify(linkList))
  }





  render() {

    const searchWord = this.state.search.toLowerCase();
    console.log("searchWord", searchWord);
    const filteredLinks = this.state.links.filter((link) => {

      return (
        link.name.toLocaleLowerCase().includes(searchWord) ||
        link.url.toLocaleLowerCase().includes(searchWord) ||
        link.tags.map((tag) => {
          return tag.name.toLowerCase().includes(searchWord)
        }).indexOf(true)> -1
      )
    })
    console.log("filteredLinks", filteredLinks);
    return (
      <>
        <Addlink addLinkHandler={this.addLinkHandler} />
        <Search onSearch={this.onSearch} />
        <Linklist links={filteredLinks} />
      </>
    )

  }

}