# 갤러리 프로젝트

# ❍ 기능

## Home,NotFound,Detail 페이지 총 3개로 동작하도록 했습니다.

## Home.jsx

Home에서 맨 위 상단에 보이는 Profile 부분은 Profile.jsx로 따로 구현하여 Home.jsx에 import하여 컴포넌트 형식으로 사용했습니다.
그리고 Home에서 보이는 3X3 Grid 형태의 사진들과 Text들은 Card.jsx에 구현하여 Home에서 props를 전달받고 /detail로 넘어가도록 했습니다.
이때 Card컴포넌트에 id,name,text,img들을 props로 받도록하는데 총 8개의 사진들이 보여야하므로 Axios GET으로 받아올때 useState를 이용하여 SetImages에 res.data로 받고 이게 images에 저장되도록 했습니다. 그리고 이 내용들이 배열 형태이므로 map을 이용하여 하나씩 뺴오는데 Card 컴포넌트 props에 하나씩 연결하여 출력하는 형태로 구현하였습니다.

## Card.jsx

    Card 컴포넌트에서는 따로 API를 연결하는게 아닌 Home과 Detail사이를 연결하는 역할을 하기 때문에 클릭하면 /detail페에지로 넘어가는 부분을 onClick을 이용하였고 이 부분은 useNavigate를 사용하여 상세페이지인 /detail/{id}로 넘어가도록 했습니다. {id}부분은 해당 이미지가 가지는 고유의 id를 이용하여 각각의 사진들의 정보에 맞는 경로가 표시되도록한 것입니다.
    Home에서 이미지를 모두 가져오는 부분의 GET API를 보면 요소들이 imageName,imageText,imageURL이렇게 이루어져 있는데 이 각 부분을 Card의 name,text,img로 연결하는 것을 Home.jsx에서 구현하였습니다.

## Detail.jsx

    클릭 했을 때 해당 이미지의 고유한 id를 imgId라는 useParams를 이용한 변수로 받고 App.js에서도 경로를 /detail/:imgId로 작성하여 라우터 이동이 잘 동작할 수 있도록 하였습니다.
    해당 이미지와 그에 맞는 text와 name이 출력되는 것은 Card.jsx에서 넘어온 props를 이용하였고 그 이미지에 달려있는 댓글이 뜨는 것을 Comment.jsx에서 따로 컴포넌트를 구성하여 import하는 방식으로 구현했습니다.
    그리고 그 이미지에 맞는 댓글이 뜨는 GET API는 http://3.36.127.43:8080/${imgId}/comments 와 같이 작성했습니다. 해당 이미지의 고유 아이디인 imgId를 params로 받았기 때문에 이를 이용해 img,text,name을 가져왔습니다.

    - Comment.jsx
      이 부분은 앞서 만든 Card.jsx와 비슷하게 Detail.jsx에 props를 넘겨주고 import하는 역할이기 때문에 댓글 API에 있는 요소인 id, 댓글의 내용을 의미하는 text 이렇게 두가지를 props로 넘겨주었습니다.
      그래서 Detai.jsx에서 Comment부분을 구현하기 위해 Comment.jsx를 import하고 useStates를 이용해 SetComments에 comments에 관한 API를 받고 그 배열들을 comments에 저장하여 map을 이용해 Comment컴포넌트의 props들과 연결하여 출력하는 형식으로 구현하였습니다.

    - 댓글 삭제 부분
      이 부분은 Delete API를 가져와야하니까 따로 컴포넌트를 구성해야하나 고민이 많았지만 같은 Detail페이지에서 동작하는 것이므로 Detail.jsx 안에서 함수 형태로 구현했습니다. deleteCommentHandler 라는 함수를 만들어 그 댓글을 단 id를 매개변수로 받고 axios를 이용해 delete하는 api를 받아서 http://3.36.127.43:8080/${imgId}/comments/${id} 이렇게 해당 이미지의 댓글이 달린 id를 이용해 api경로를 연결합니다.
      그리고 똑같이 Comment를 담당하는 상태이므로 setComments useStates변수를 이용해 이전 댓글을 의미하는 prev에서 삭제하려는 댓글의 id인 comment.id가 id와 다른지 확인하도록하고 같으면 삭제를 하고 다르면 그 댓글들만 filter하여 다시 남아있는 댓글을 보여줍니다.
      그리고 이 deleteCommentHandler 함수는 Comment컴포넌트에서 DeleteBtn이 onClikc 되면 실행되도록 했습니다.

    - 댓글 작성하고 추가하는 부분
      이 부분은 Detail.jsx에서 스타일 컴포넌트로 input태그와 button태그로 구현하였습니다. 일단 위에 댓글 삭제하는 방법과 같이 같은 detail페이지 안에서 동작하므로 addCommentHandler라는 함수를 만들었습니다.
      addCommentHandler 함수에서 post를 api를 axios로 http://3.36.127.43:8080/${imgId}/comments 받고 setComments에는 이전 댓글들인 prev와 새로 입력한 res.data를 이어서 만든 배열을 다시 저장해줍니다.
      그리고 댓글을 작성할 수 있도록 input태그로 AddComment라는 스타일 컴포넌트를 만들고 이때 입력하는 값을 value로 newComment라는 변수에 담았습니다. onChange를 이용해 위에서 만든 setNewComment에 이 value를 넘겨줍니다.
      그리고 최종적으로 게시 버튼을 누르면 적용되도록 NewCommentBtn이라는 스타일 컴포넌트로 만든 button을 onClick하면 addCommentHandler함수를 실행시키도록 했습니다.

## 사용한 ❍ API

요청을 위한 호스트 문서는 아래와 같습니다.

- **DOCS** : http://3.36.127.43:8080/swagger-ui/#/GalleryController

## 🚗 동작 영상
