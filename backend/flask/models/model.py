import sqlalchemy
from datetime import datetime, timedelta, timezone
import sqlalchemy.ext.declarative
import sqlalchemy.orm
from sqlalchemy.orm import relationship

USERNAME = 'root'
PASSWORD = 'root'
HOST = 'localhost'
PORT = '3333'
DATABASE = 'anshinfurow'

url = 'mysql+pymysql://{}:{}@{}:{}/{}?charset=utf8mb4'.format(USERNAME, PASSWORD, HOST, PORT, DATABASE)
engine = sqlalchemy.create_engine(url, echo=True)
Base = sqlalchemy.ext.declarative.declarative_base()

class UserEntity(Base):
    __tablename__ = 'user'
    user_id = sqlalchemy.Column(sqlalchemy.String(20), primary_key=True)
    name = sqlalchemy.Column(sqlalchemy.String(30))
    password = sqlalchemy.Column(sqlalchemy.String(30))
    token = sqlalchemy.Column(sqlalchemy.String(30))
    alert = sqlalchemy.Column(sqlalchemy.Tinyint(0))

    def user_entity_dict(self):
        return {
            'user_id': self.id,
            'name': self.name,
            'password': self.password,
            'token': self.token,
            'alert': self.alert
        }

Base.metadata.create_all(engine)
Session = sqlalchemy.orm.sessionmaker(bind=engine)
session = Session()

class UserService(object):

    def find_all(self):
        """
          # userテーブル全件取得
        :return: Array(UserEntity)
        """
        return session.query(UserEntity).all()

    def find(self, user_id):
        """
          #  userテーブルから該当するuser_idを持つ行を取得
        :param user_id: String
        :return: UserEntity
        """
        user = session.query(UserEntity).filter(UserEntity.user_id == user_id).all()
        if len(user) != 0:
            return user[0]
        else:
            return None


    def create(self, user_entity):
        """
          # userテーブル挿入
        :param user_entiy: UserEntity
        :return: 正常終了：success , 例外発生：error
        """
        try:
            session.add(user_entity)
            session.commit()
            return "success"
        except Exception as ex:
            print("Exception:{}".format(ex))
            return "error"

    def update(self,upd_user_entity):
        """
         # userテーブルを更新
        :param upd_user_entity: UserEntity
        :param id: int
        :return: 正常終了：success,  例外発生：error
        """

        try:
            # userテーブルから指定のidに該当する行を更新
            user = self.find(upd_user_entity.user_id)
            user.name = upd_user_entity.name
            user.password = upd_user_entity.password
            user.token = upd_user_entity.token
            user.alert = upd_user_entity.alert
            new_user = session.query(UserEntity).filter(
                UserEntity.user_id == user.user_id).first()
            new_user = new_user
            session.commit()
            return 'success'
        except Exception as ex:
            print("Exception:{}".format(ex))
            return 'error'


    def delete(self, user_id):
        """
          # userテーブルから指定のuser_idを持つ行を削除
        :param user_id: int
        :return: 正常終了：success  例外発生：error
        """
        try:
            session.query(UserEntity).filter(UserEntity.user_id == user_id).delete()
            session.commit()
            return "success"
        except Exception as ex:
            print("Exception:{}".format(ex))
            return "error"