export default (xml) => {
  const parse = new DOMParser();
  const parsedXML = parse.parseFromString(xml.data, 'application/xml');
  const title = parsedXML.querySelector('title').textContent;
  const description = parsedXML.querySelector('description').textContent;
  const items = Array.from(parsedXML.querySelectorAll('item'));
  return { title, description, items };
};