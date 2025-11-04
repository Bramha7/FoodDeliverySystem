# Food Delivery System Design and Logic

This document outlines the data models and technical logic for a food delivery system. It is intended as a learning exercise to capture how data and operations might be handled in such a system. Feedback and corrections are welcome.

## Models

### Customer

              name : string,
              email: String,
              phone_number: string,
              password: hashed,
              address: {
                street: string,
                city: string,
                ward : string,
                landmark: string
                },

                order_hsotory:[items:{
                type: mongoose.Schema.Types.ObjectId, ref: 'Order'
                }]
                payment_methods: [
                {
                type: string,
                card_last4: string,
                expiry: string
                }
                order_history: [string]
                timestamp: date

### Driver(Delivery Person)

                  name: string,
                  phone_number: string,
                  email: string,
                  password: hash,
                  vehicle_type: string,
                  vehicle_number: string,
                  status: enum['available','unavailable','suspended']
                  current_order_status: ['ready_for_pickUp','picked_up']
                  location: geopoint,
                  rating: float,
                  completed_deliveries: int,
                  timestamp: date,

### Order

                  cus_id : fk string,
                  restaurant_id : fk string,
                  driver_id : fk string,
                  items : [{

                          name: string
                          quantity: int
                          price: decimal
                      total_amount: decimal
                      status: enum['pending','accepted','preparing','on_the_way','delivered','cancelled']
                      payment_status: enum['pending','completed','failed','refunded']
                      placed_at: datetime
                      accepted_at: datetime (nullable)
                      prepared_at: datetime (nullable)
                      picked_up_at: datetime (nullable)
                      delivered_at: datetime (nullable)
                        }],
                  status : enum['pending','accepted','preparing','on_the_way','delivered','cancelled'],
                  payment_status: ['pending','completed','failed','refunded'],
                  delivery_address: {
                  street/tole: string,
                  ward: string,
                  city: string,
                  landmark: string

                  }
                  placed_at : timestamp,
                  accepted_at : timestamp,
                  prepared_at : timestamp,
                  picked_up_at : timestamp,

### MenuItem

                    name: { type: String, required: true },
                      description: { type: String },
                      price: { type: Number, required: true },
                      category: { type: String }, // e.g., "Pizza", "Beverage"
                      available: { type: Boolean, default: true },
                      created_at: { type: Date, default: Date.now },
                      updated_at: { type: Date, default: Date.now }
