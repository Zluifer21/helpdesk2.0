export class TicketByFilters {
constructor(
public subjects:any,
public users_involved_tickets:string,
public status_id:string,
public created_at:string,
public dateIni:string,
public dateEnd:string,
public user_assigned:string,
public expiration?

)
{}

}
