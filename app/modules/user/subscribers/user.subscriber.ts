import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { User } from '../entities/user.entity';
import { InsertEvent } from 'typeorm/subscriber/event/InsertEvent';
import { UpdateEvent } from 'typeorm/subscriber/event/UpdateEvent';
import { RemoveEvent } from 'typeorm/subscriber/event/RemoveEvent';
import { TransactionStartEvent } from 'typeorm/subscriber/event/TransactionStartEvent';
import { TransactionCommitEvent } from 'typeorm/subscriber/event/TransactionCommitEvent';
import { TransactionRollbackEvent } from 'typeorm/subscriber/event/TransactionRollbackEvent';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  /**
   * Returns the class of the entity to which events will listen.
   */
  listenTo() {
    return User;
  }

  /**
   * Called after entity is loaded from the database.
   */
  afterLoad(entity: User) {
    console.log(`AFTER ENTITY LOADED: `, entity);
  }

  /**
   * Called before entity is inserted to the database.
   */
  beforeInsert(event: InsertEvent<User>) {
    console.log(`BEFORE POST INSERTED: `, event.entity);
  }

  /**
   * Called after entity is inserted to the database.
   */
  afterInsert(event: InsertEvent<User>) {
    console.log(`AFTER ENTITY INSERTED: `, event.entity);
  }

  /**
   * Called before entity is updated in the database.
   */
  beforeUpdate(event: UpdateEvent<User>) {
    console.log(`BEFORE ENTITY UPDATED: `, event.entity);
  }

  /**
   * Called after entity is updated in the database.
   */
  afterUpdate(event: UpdateEvent<User>) {
    console.log(`AFTER ENTITY UPDATED: `, event.entity);
  }

  /**
   * Called before entity is removed from the database.
   */
  beforeRemove(event: RemoveEvent<User>) {
    console.log(
      `BEFORE ENTITY WITH ID ${event.entityId} REMOVED: `,
      event.entity,
    );
  }

  /**
   * Called after entity is removed from the database.
   */
  afterRemove(event: RemoveEvent<User>) {
    console.log(
      `AFTER ENTITY WITH ID ${event.entityId} REMOVED: `,
      event.entity,
    );
  }

  /**
   * Called before transaction is started.
   */
  beforeTransactionStart(event: TransactionStartEvent) {
    console.log(`BEFORE TRANSACTION STARTED: `, event);
  }

  /**
   * Called after transaction is started.
   */
  afterTransactionStart(event: TransactionStartEvent) {
    console.log(`AFTER TRANSACTION STARTED: `, event);
  }

  /**
   * Called before transaction is committed.
   */
  beforeTransactionCommit(event: TransactionCommitEvent) {
    console.log(`BEFORE TRANSACTION COMMITTED: `, event);
  }

  /**
   * Called after transaction is committed.
   */
  afterTransactionCommit(event: TransactionCommitEvent) {
    console.log(`AFTER TRANSACTION COMMITTED: `, event);
  }

  /**
   * Called before transaction rollback.
   */
  beforeTransactionRollback(event: TransactionRollbackEvent) {
    console.log(`BEFORE TRANSACTION ROLLBACK: `, event);
  }

  /**
   * Called after transaction rollback.
   */
  afterTransactionRollback(event: TransactionRollbackEvent) {
    console.log(`AFTER TRANSACTION ROLLBACK: `, event);
  }
}
